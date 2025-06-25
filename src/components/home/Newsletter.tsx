import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsSubscribing(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Successfully subscribed!", {
        description:
          "You'll receive updates about new features and health tips",
      });

      setEmail("");
    } catch (error) {
      toast.error("Subscription failed", {
        description: "Please try again later",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <section className="py-16 bg-green-50 dark:bg-green-900/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Stay Updated
          </h2>
          <p className="max-w-[600px] text-gray-500 md:text-lg/relaxed dark:text-gray-400">
            Get the latest health insights and updates from SecondView delivered
            to your inbox.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex w-full max-w-sm space-x-2"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button
              type="submit"
              disabled={isSubscribing}
              className="bg-green-600 hover:bg-green-700"
            >
              {isSubscribing ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          <p className="text-xs text-gray-500">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};
