// example from TS Site
function padLeft(padding: number | string, input: string): string {
  return " ".repeat(padding) + input;
}

function padLeft(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}

// my example
function replace(arr: number[] | string): string {
  return typeof arr === 'string' ? arr : arr.join('')
}

replace([1, 5])
replace('bla')
replace(false)