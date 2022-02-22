class DetailsController < ApplicationController

    def index
        vin = params[:vin]
        manufacturer = params[:manufacturer]
        if vin.length > 0 
            @result = find_vin(vin)
        elsif  manufacturer == "0"
            @result = find_manufacturers
        elsif manufacturer != "0"
            @result = find_make(manufacturer)
        end
       
        if manufacturer=="" && vin == ""
            render(
                json:{errors: "Invalid request"},
                status: 422
            )
        else
            render(
                json: @result,
                status: 200
            )
        end
       
    end

    private

    def response_api(url)
        response = Excon.get(url)
        JSON.parse(response.body)
    end

    def find_vin(name)
        response_api(
            "https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/#{URI.encode_www_form_component(name)}?format=json"
        )
    end

    def find_make(name)
        response_api(
            "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakeForManufacturer/#{URI.encode_www_form_component(name)}?format=json"
        )
    end

    def find_manufacturers
        response_api(
            "https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json"
        )
    end

end
