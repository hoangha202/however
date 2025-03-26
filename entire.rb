#!/usr/bin/env ruby
# frozen_string_literal: true

# A simple Hello World program in Ruby
class Greeter
  def self.say_hello(name = "World")
    puts "Hello, #{name}!"
  end
end

if __FILE__ == $PROGRAM_NAME
  Greeter.say_hello
end