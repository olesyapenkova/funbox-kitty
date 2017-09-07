use Rack::Static,
  :urls => ["/css", "/images", "/js", "/fonts", "/favicon.ico", "/apple-touch-icon.png"],
  :root => 'public'

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'dist, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}
