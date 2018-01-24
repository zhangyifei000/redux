
/**
 * 常量
 */

export const ADD_TODO = "ADD_TODO";

/**
 * actions
 */

export function addTodo(text) {
  return {type: ADD_TODO, text}
}

