class UserwordsSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :word_id

  belongs_to :word
  belongs_to :user
  has_many :tags, through: :word_tags
end
