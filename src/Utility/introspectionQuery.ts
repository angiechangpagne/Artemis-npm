const introspectionQuery: string = `query IntrospectionQuery{
  __schema{
    queryType { name }
    mutationType { name }
    subscriptionType { name }
    types {
      kind
    name
    description
    fields(includeDeprecated: true){
      name
      desription
      args{
        name
      desription 
      type{
        kind
      name
      ofType {
        kind
        name
        ofType{
          kind
          name
        }
      }
      }
      }
    }
    }
  }
}` 