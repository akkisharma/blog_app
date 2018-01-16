class HomeController < ApplicationController
  layout 'posts_layout'
	before_filter :authenticate_user!

  def index
  end
end
