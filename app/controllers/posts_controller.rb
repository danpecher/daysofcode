class PostsController < ApplicationController
  def index
    render json: Post.timeline(current_user)
  end

  def create
    post = Post.create_and_share(post_params, current_user)
    render json: post
  end

  private
  def post_params
    params.require(:post).permit(:content)
  end
end