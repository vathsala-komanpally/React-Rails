class CreateDrinks < ActiveRecord::Migration[6.1]
  def change
    create_table :drinks do |t|
      t.string :itemname
      t.string :description
      t.integer :price
    end
  end
end
