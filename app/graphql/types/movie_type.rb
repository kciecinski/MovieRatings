  Types::MovieType = GraphQL::ObjectType.define do
    name "Movie"
    field :title, types.String
    field :rating, types.Int
    field :id, types.ID
  end

