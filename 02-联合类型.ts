// TypeScript 联合类型的多个知识点！
// https://juejin.cn/post/7095547569777934367?searchId=202412301344272392240D857FBF33BA65
// Union Type
function greet(person: string): string {
  return `Hello, ${person}`;
}

console.log(greet("world"));


function greets(person: string | string[]): string | string[] {
  if (Array.isArray(person)) {
    return person.map((p) => `Hello, ${p}`)
  } else if (typeof person === "string") {
    return `Hello, ${person}`
  }
  throw new Error(`This should be impossible`);
}

console.log(greets(["a", "b", "c"]));


type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

function sendRequest(url: string, method: HttpMethod) {
  // ...
}

sendRequest("https://example.com", "GET");
