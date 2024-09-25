import type { APIRoute } from "astro"

export const GET: APIRoute = async ({ request, redirect }) => {
  // const formData = await request.formData();
  // console.log({formData})

  console.log("GET")

  return redirect("/")
}
