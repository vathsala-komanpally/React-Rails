class CreateDesserts < ActiveRecord::Migration[6.1]
  def change
    create_table :desserts do |t|
      t.string :itemname
      t.string :description
      t.integer :price
    end
  end
end
