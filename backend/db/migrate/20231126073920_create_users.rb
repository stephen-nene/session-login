class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :name,null: false
      t.string :email, null: false
      t.string :phonenumber, null: false
      t.integer :role, default: 0
      t.string :password_digest,null: false
      t.integer :status, default: 0
      t.string :profile_image, default: 'https://placehold.co/600x400'

      t.timestamps
    end
  end
end
