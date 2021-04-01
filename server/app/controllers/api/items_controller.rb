class Api::ItemsController < ApplicationController

    def index
        render json: Item.all
    end
    
    def create
        groceryitems = Item.create(itemname: params[:itemname], price: params[:price], noOfItems: params[:noOfItems], image: params[:image], categoryName: params[:categoryName])
        groceryitems_valid = groceryitems.valid?
        
        if groceryitems_valid
          render json: {message: 'Successfully created grocery Items list!'}, status: 200
        else
          render json: {message: 'Unable to create todo list'}, status: 400
        end
    end
    
    def show
        puts params[:id]
        render json: Item.find(params[:id])
    end
    
    def update
        groceryitems = Item.find(params[:id])
        groceryitems.update(itemname: params[:itemname], price: params[:price], noOfItems: params[:noOfItems], image: params[:image], categoryName: params[:categoryName])
        render json: {type: 'Successfully updated entry!'}
    end
    
    def destroy
        Item.destroy(params[:id])
        render json: {message: 'ENTRY HAS BEEN DELETED!!!!!'}
    end
end