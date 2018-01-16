# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

#create admin user
User.create(email: "admin@blog.com", password: '123456789', role_name: "admin")

#create visitor user
User.create(email: "user@blog.com", password: '123456789', role_name: "user")