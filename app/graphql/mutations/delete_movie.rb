class Mutations::DeleteMovie < Mutations::BaseMutation
  null true

  argument :id, ID, required: true

  def resolve(id:)
    Movie.find(id).destroy
    {}
  end

end