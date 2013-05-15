require 'yaml'
require 'json'
base = 'i18n/'
Dir[base + "*.yml"].each do |path|
    content = open(path).read()
    yml = YAML.load(content);
    open(path.gsub(/\.yml/, '.json'), 'w').write(JSON.dump(yml))
end
