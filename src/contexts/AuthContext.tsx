import React, { createContext, useContext, useState, useEffect } from "react";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

type AuthContextType = {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Setting up auth provider...");

    // Set up auth state listener FIRST
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, newSession) => {
      console.log(
        "Auth state changed:",
        event,
        newSession?.user?.email || "No user"
      );

      // Only update state if there's an actual change to avoid loops
      if (
        (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") &&
        newSession
      ) {
        setSession(newSession);
        setUser(newSession.user);

        if (event === "SIGNED_IN") {
          toast.success("Signed in successfully", {
            description: `Welcome ${newSession.user.email || "back"}!`,
            duration: 2000, // Auto-close after 2 seconds
          });
        }
      } else if (event === "SIGNED_OUT") {
        setSession(null);
        setUser(null);

        toast.info("Signed out successfully");
      }
    });

    // THEN check for existing session
    const getInitialSession = async () => {
      try {
        setIsLoading(true);
        console.log("Checking for existing session...");

        const {
          data: { session: initialSession },
          error,
        } = await supabase.auth.getSession();

        if (error) {
          console.error("Error getting session:", error);
          toast.error("Session error", {
            description: error.message,
          });
        } else {
          console.log(
            "Initial session loaded:",
            initialSession?.user?.email || "No active session"
          );
          setSession(initialSession);
          setUser(initialSession?.user ?? null);
        }
      } catch (e: any) {
        console.error("Unexpected error during session retrieval:", e);
      } finally {
        setIsLoading(false);
      }
    };

    getInitialSession();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      return { error };
    } catch (error: any) {
      console.error("Sign in error:", error);
      return { error };
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signUp({ email, password });
      return { error };
    } catch (error: any) {
      console.error("Sign up error:", error);
      return { error };
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error: any) {
      console.error("Sign out error:", error);
      toast.error("Sign out failed", {
        description: error.message || "Failed to sign out",
      });
    }
  };

  const signInWithGoogle = async () => {
    try {
      console.log("Starting Google sign-in process...");
      const redirectUrl = `${window.location.origin}/dashboard`;
      console.log(`Redirect URL: ${redirectUrl}`);

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: redirectUrl,
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
        },
      });

      if (error) {
        console.error("Google sign-in error:", error);
        toast.error("Google sign-in failed", {
          description: error.message,
        });
      } else {
        console.log("Google sign-in initiated:", data);
        toast.loading("Connecting to Google...", {
          id: "google-signin",
          duration: 5000,
        });
      }
    } catch (error: any) {
      console.error("Unexpected error during Google sign-in:", error);
      toast.error("Google sign-in failed", {
        description: error.message || "An unexpected error occurred",
      });
    }
  };

  const value = {
    user,
    session,
    isLoading,
    signIn,
    signUp,
    signOut,
    signInWithGoogle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
