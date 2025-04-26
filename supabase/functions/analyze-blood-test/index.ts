
import "https://deno.land/x/xhr@0.1.0/mod.ts"
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { bloodTestData } = await req.json()

    if (!bloodTestData) {
      throw new Error('No blood test data provided')
    }

    // Format the prompt for blood test analysis
    const prompt = `Analyze the following blood test results and provide insights. For each marker:
    1. Determine if it's low, normal, or high based on reference ranges
    2. Categorize it (e.g., Cardiovascular, Hormonal, Liver, etc.)
    3. Provide a brief insight for any abnormal values
    
    Blood test data:
    ${JSON.stringify(bloodTestData, null, 2)}`

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are a medical analysis assistant specializing in blood test interpretation. Provide clear, concise analysis of blood test results.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.3 // Lower temperature for more focused, analytical responses
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(JSON.stringify(error))
    }

    const data = await response.json()
    const analysis = data.choices[0].message.content

    return new Response(JSON.stringify({ analysis }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })

  } catch (error) {
    console.error('Error in analyze-blood-test function:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
