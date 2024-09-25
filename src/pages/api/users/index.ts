import type { APIRoute } from "astro"

export const GET = async ({ params, request }) => {
  console.log({ params })

  // return new Response(
  //   {},

  //   {
  //     status: 200,
  //   }
  // )

  return new Response(
    JSON.stringify({
      message: `This was a ${request.method}!`,
    })
  )
}

// https://docs.astro.build/en/guides/endpoints/#server-endpoints-api-routes
