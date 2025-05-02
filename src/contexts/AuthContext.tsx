
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

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
  const { toast } = useToast();

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, newSession) => {
      console.log("Auth state changed:", event, newSession?.user?.email || "No user");
      setSession(newSession);
      setUser(newSession?.user ?? null);
      
      if (event === 'SIGNED_IN' && newSession?.user) {
        toast({
          title: "Signed in successfully",
          description: `Welcome ${newSession.user.email || "back"}!`,
        });
      }
      
      if (event === 'SIGNED_OUT') {
        toast({
          title: "Signed out",
          description: "You have been signed out successfully.",
        });
      }
    });

    // THEN check for existing session
    const getInitialSession = async () => {
      try {
        setIsLoading(true);
        const { data: { session: initialSession }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error("Error getting session:", error);
          toast({
            title: "Session error",
            description: error.message,
            variant: "destructive"
          });
        } else {
          setSession(initialSession);
          setUser(initialSession?.user ?? null);
          console.log("Initial session loaded:", initialSession?.user?.email || "No active session");
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
  }, [toast]);

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
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
      toast({
        title: "Sign out failed",
        description: error.message || "Failed to sign out",
        variant: "destructive",
      });
    }
  };

  const signInWithGoogle = async () => {
    try {
      console.log("Starting Google sign-in process...");
      console.log(`Redirect URL: ${window.location.origin}/dashboard`);
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/dashboard`
        }
      });
      
      if (error) {
        console.error("Google sign-in error:", error);
        toast({
          title: "Google sign-in failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        console.log("Google sign-in initiated:", data);
      }
    } catch (error: any) {
      console.error("Unexpected error during Google sign-in:", error);
      toast({
        title: "Google sign-in failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
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
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
