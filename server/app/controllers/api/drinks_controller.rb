class Api::DrinksController < ApplicationController

    def index
        render json: Drink.all
    end
    
    def create
        drinkitems = Drink.create(itemname: params[:itemname], price: params[:price], description: params[:description])
        drinkitems_valid = drinkitems.valid?
        
        if drinkitems_valid
          render json: {message: 'Successfully created drink Items list!'}, status: 200
        else
          render json: {message: 'Unable to create drink Items list'}, status: 400
        end
    end
    
    def show
        puts params[:id]
        render json: Drink.find(params[:id])
    end
    
end