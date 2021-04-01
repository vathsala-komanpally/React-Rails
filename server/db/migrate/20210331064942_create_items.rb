class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :itemname
      t.integer :price
      t.integer :noOfItems
      t.string :image
      t.string :categoryName
    end
  end
end
