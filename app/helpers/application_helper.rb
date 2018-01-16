module ApplicationHelper

	def is_powerfull?
		current_user.role_name.eql?('admin')
	end

end
