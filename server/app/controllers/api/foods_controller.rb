class Api::FoodsController < ApplicationController

    def index
        render json: Food.all
    end
    
    def create
        fooditems = Food.create(itemname: params[:itemname], price: params[:price], description: params[:description])
        fooditems_valid = fooditems.valid?
        
        if fooditems_valid
          render json: {message: 'Successfully created food Items list!'}, status: 200
        else
          render json: {message: 'Unable to create food Items list'}, status: 400
        end
    end
    
    def show
        puts params[:id]
        render json: Food.find(params[:id])
    end
    
    def update
        fooditems = Food.find(params[:id])
        fooditems.update(itemname: params[:itemname], price: params[:price], description: params[:description])
        render json: {type: 'Successfully updated entry!'}
    end
    
    def destroy
        Food.destroy(params[:id])
        render json: {message: 'ENTRY HAS BEEN DELETED!!!!!'}
    end
end