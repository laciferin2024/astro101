import type { APIRoute } from "astro"

export const prerender = true //opt for SSR custom endpoints turn into live server endpoints that are called on request

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
