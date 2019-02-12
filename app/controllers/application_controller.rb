class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  after_action :set_csrf_cookie

  protected

    def set_csrf_cookie
      cookies["X-CSRF-Token"] = form_authenticity_token
    end
  
end
