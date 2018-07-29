/** Create map of actions, given action's names */
export const createScopedActionTypes = (scope, actions) => {
  if (typeof scope !== 'string')
    throw Error('Scope (first argument) must be a string')

  return actions.reduce(
    (map, action) => ({ ...map, [action]: `${scope}:${action}` }),
    {}
  )
}
