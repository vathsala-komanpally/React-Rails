class CreateFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :foods do |t|
      t.string :itemname
      t.string :description
      t.integer :price
    end
  end
end
