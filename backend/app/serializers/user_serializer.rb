class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phonenumber, :role, :password_digest, :status, :profile_image
end
