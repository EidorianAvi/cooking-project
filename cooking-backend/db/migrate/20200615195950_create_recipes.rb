class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :title
      t.integer :ready_in_minutes
      t.string :recipe_url
      t.string :image

      t.timestamps
    end
  end
end
