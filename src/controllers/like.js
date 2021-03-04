const { validate: isUuid } = require('uuid');
const repositories = require('../store');

const repositoriesController = {
    create: (request, response) => {
        const { id } = request.params;
        const repository = repositories.find(repository => repository.id === id);
      
        if (!repositories.length || !isUuid(id)) {
          return response.status(400).json({ error: 'Invalid repository' });
        }
      
        repository.likes += 1;

        return response.json(repository);
    }
}

module.exports = repositoriesController;
