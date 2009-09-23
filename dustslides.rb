require 'net/http'
require 'uri'

def existing_frames
  (600..1800).map do |time|
    response = nil
    Net::HTTP.start("strm-gallery.coastalwatch.com", 80) do |http|
      response = http.head("/camera/livestill/227/LiveStill_200909230#{time}.gif")
    end
    response.code == "200" ? time : nil
  end.compact
end
