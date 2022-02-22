require 'rails_helper'

RSpec.describe "Details API", type: :request do
    describe 'POST /details' do
        # to get all manufacturers
        context 'valid all manufacturer request' do
            before { post '/api/details',params:{"vin":"","manufacturer":"0"}}     
             it 'return details' do
                expect(response).to have_http_status(200) 
             end        
        end
        context 'valid manufacturer request' do
            before { post '/api/details',params:{"vin":"","manufacturer":"958"}}     
             it 'return details' do
                expect(response).to have_http_status(200) 
             end        
        end

        context 'valid vin request' do
            before { post '/api/details',params:{"vin":"5N1AN0NU4AC575036","manufacturer":"958"}}     
             it 'return details' do
                expect(response).to have_http_status(200) 
             end        
        end

        context 'invalid manufacturer request' do
            before { post '/api/details',params:{"vin":"","manufacturer":""}}     
             it 'return details' do
                expect(response).to have_http_status(422) 
             end        
        end

     
    end

   



end