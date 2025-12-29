function throwMe() {
  throw new Error("Ouch!");
}

export async function GET() {
  try {
    throwMe();
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error("ErrorStack: ", e.stack);
    }
  }

  return new Response("Hello, world!");
}
