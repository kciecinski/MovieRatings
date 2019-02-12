module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World!"
    end

    field :movies, Types::MovieType.to_list_type, null: false,
      description: "List of posts"
    def movies
      Movie.all
    end

    field :movie, Types::MovieType, null: false,
      description: "Movie by id" do
        argument :id, ID, required: true
      end

    def movie(argument)
      Movie.find(argument[:id])
    end


  end
end
