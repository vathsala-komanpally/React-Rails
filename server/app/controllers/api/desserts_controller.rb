class Api::DessertsController < ApplicationController

    def index
        render json: Dessert.all
    end
    
    def create
        dessertitems = Dessert.create(itemname: params[:itemname], price: params[:price], description: params[:description])
        dessertitems_valid = dessertitems.valid?
        
        if dessertitems_valid
          render json: {message: 'Successfully created dessert Items list!'}, status: 200
        else
          render json: {message: 'Unable to create dessert Items list'}, status: 400
        end
    end
    
    def show
        puts params[:id]
        render json: Dessert.find(params[:id])
    end
    
end