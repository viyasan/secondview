
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Loader2, AlertTriangle, CheckCircle, Activity } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type BloodTestResult = {
  id: string;
  marker_name: string;
  value: string;
  unit: string | null;
  reference_range: string | null;
  status: 'low' | 'normal' | 'high' | null;
  category: string;
  insight: string | null;
};

type ResultsByCategory = {
  [category: string]: BloodTestResult[];
};

export const ResultsDisplay = () => {
  const { id } = useParams<{ id: string }>();
  const [results, setResults] = useState<ResultsByCategory>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const { data, error } = await supabase
          .from("results")
          .select("*")
          .eq("upload_id", id);

        if (error) throw error;

        if (!data || data.length === 0) {
          setError("No results found for this upload");
          setIsLoading(false);
          return;
        }

        // Group by category
        const resultsByCategory: ResultsByCategory = {};
        data.forEach((result: any) => {
          const normalizedStatus = result.status ? 
            (result.status.toLowerCase() as 'low' | 'normal' | 'high') : null;
          
          const processedResult: BloodTestResult = {
            ...result,
            status: normalizedStatus
          };

          if (!resultsByCategory[processedResult.category]) {
            resultsByCategory[processedResult.category] = [];
          }
          resultsByCategory[processedResult.category].push(processedResult);
        });

        setResults(resultsByCategory);
        setActiveCategory(Object.keys(resultsByCategory)[0]);
      } catch (error: any) {
        console.error("Error fetching results:", error);
        setError(error.message || "Failed to load results");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchResults();
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 space-y-4">
        <Loader2 className="h-12 w-12 animate-spin text-green-600" />
        <p className="text-lg font-medium">Loading your results...</p>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="max-w-2xl mx-auto">
        <AlertTriangle className="h-5 w-5" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Blood Test Results</h2>

      <Tabs value={activeCategory || ""} onValueChange={setActiveCategory} className="w-full">
        <TabsList className="w-full max-w-full overflow-x-auto flex-nowrap mb-4 py-1 px-1">
          {Object.keys(results).map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="min-w-max"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(results).map(([category, categoryResults]) => (
          <TabsContent key={category} value={category} className="space-y-4">
            {categoryResults.map((result) => (
              <Card key={result.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{result.marker_name}</CardTitle>
                    {result.status && (
                      <Badge variant={
                        result.status === "normal" ? "outline" : 
                        result.status === "low" ? "secondary" : "destructive"
                      }>
                        {result.status === "normal" ? (
                          <CheckCircle className="h-3 w-3 mr-1" />
                        ) : (
                          <AlertTriangle className="h-3 w-3 mr-1" />
                        )}
                        {result.status.charAt(0).toUpperCase() + result.status.slice(1)}
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="flex items-center space-x-2">
                    <span className="font-medium text-lg">{result.value}</span>
                    {result.unit && <span className="text-gray-500">{result.unit}</span>}
                    {result.reference_range && (
                      <span className="text-xs text-gray-500">
                        Reference: {result.reference_range}
                      </span>
                    )}
                  </CardDescription>
                </CardHeader>
                {result.insight && (
                  <CardContent>
                    <p className="text-sm text-gray-600">{result.insight}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
