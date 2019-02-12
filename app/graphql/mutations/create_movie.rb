class Mutations::CreateMovie < Mutations::BaseMutation
  null true

  argument :title, String, required: true
  argument :rating, Int, required: true

  field :movie,  Types::MovieType, null: true
  field :errors, [String], null: false

  def resolve(title:, rating:)
    movie = Movie.new(title: title,rating:rating)

    if movie.save
      # Successful creation, return the created object with no errors
      {
        movie: movie,
        errors: [],
      }
    else
      # Failed save, return the errors to the client
      {
        movie: nil,
        errors: movie.errors.full_messages
      }
    end
  end
end