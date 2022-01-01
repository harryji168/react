# (HTTP Verb: delete - path: /questions/:id ) ==> questions controller / destroy action
# (HTTP Verb: get - path: /questions/:id/edit ) ==> questions controller / edit action
# (HTTP Verb: get - path: /questions/:id ) ==> questions controller / show action
# (HTTP Verb: post - path: /questions/:id/comments ) ==> comments controller / create action
# (HTTP Verb: get - path: /faq ) ==> home controller / faq action

delete '/questions/:id', {to: "questions#destroy"}
get '/questions/:id/edit', {to: "questions#edit"}
get '/questions/:id', {to: "questions#show"}
post '/questions/:id/comments', {to: 'comments#create'}
get '/faq', {to: 'home#faq'}


