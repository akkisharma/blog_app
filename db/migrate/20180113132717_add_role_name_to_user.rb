class AddRoleNameToUser < ActiveRecord::Migration
  def up
    add_column :users, :role_name, :string
  end

  def down
    remove_column :users, :role_name
  end
end
