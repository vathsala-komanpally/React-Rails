class ApplicationController < ActionController::API
    before_action :user_exists

    def encode_token user_id
      JWT.encode user_id, nil, 'none'
    end
  
    def decode_token
      auth_token = request.headers['token']
      if auth_token
        begin
          JWT.decode auth_token, nil, false
        rescue StandardError
          nil
        end
      end
    end
  
    def user_exists
      valid = decode_token
      if valid
        true
      else
        render json: { message: 'Unauthorised' }, status: :unauthorized
      end
    end
  
  end
  
