# db/seeds.rb

require 'faker'


# Seed Users
puts "\n🌟 Seeding Users..."

10.times do
    full_name = Faker::Name.name
    first_name = full_name.split(' ').first.downcase
    user = User.create(
      name: full_name,
      email: "#{first_name}@stevenene.com",
      phonenumber: Faker::PhoneNumber.phone_number,
      role: User.roles.keys.sample,
      password: 'password',  
      status: User.statuses.keys.sample,
      profile_image: Faker::Avatar.image(slug: Faker::Internet.slug, size: '600x400', format: 'png')
    )
    puts "👤 Created user: #{user.name} (#{user.email})"
  end


puts "👤 Created #{User.count} users ... ✅"