import type { APIRoute } from "astro"

export const GET: APIRoute = async ({ locals }) => {
  // @ts-expect-error
  const db = locals.runtime.env.PRESENTS
  
  await db.exec("CREATE TABLE IF NOT EXISTS worldwide (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, present_amount NUMBER)");
  await db.exec("INSERT INTO worldwide (name, present_amount) VALUES ('unknown', '5')");
  await db.exec("INSERT INTO worldwide (name, present_amount) VALUES ('Rudolf', '5')");
  
  return new Response(JSON.stringify({
      message: "Data initialized!"
    })
  )
}
