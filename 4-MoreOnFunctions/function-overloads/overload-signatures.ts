function fn(x: string): string;
// Return type isn't right
function fn(x: number): boolean;

function fn(x: string | number) {
  return "oops";
}

// как можно заметить перегрузки должны быть чёткими, то есть сохраняя тип
