10.times do
  user = User.create(name: Faker::DragonBall.character)
    i = 1
    10.times do
      body = Faker::Lebowski.quote
      user_id = i
      Post.create(body: body, user_id: user_id)
    end
end



