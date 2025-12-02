import { Project } from './Project';

// Static project data - works everywhere (Vercel, local, etc.)
const STATIC_PROJECTS = [
  { id: 1, name: "Anderson Group", description: "Fully-configurable intermediate framework. Building modern solutions for enterprise clients.", imageUrl: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=500&h=300&fit=crop", contractTypeId: 3, contractSignedOn: "2013-08-04T22:39:41.473Z", budget: 54637, isActive: false },
  { id: 2, name: "Bailey Inc", description: "Centralized interactive application. Streamlining business processes with cutting-edge technology.", imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=500&h=300&fit=crop", contractTypeId: 4, contractSignedOn: "2012-08-06T21:21:31.419Z", budget: 91638, isActive: true },
  { id: 3, name: "Carter LLC", description: "Re-contextualized dynamic moratorium. Innovative approaches to complex challenges.", imageUrl: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=500&h=300&fit=crop", contractTypeId: 6, contractSignedOn: "2016-06-26T18:24:01.706Z", budget: 29729, isActive: true },
  { id: 4, name: "Davis Corp", description: "Innovative 6th generation model. Pushing boundaries in software development.", imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&h=300&fit=crop", contractTypeId: 4, contractSignedOn: "2013-05-26T01:10:42.344Z", budget: 45660, isActive: true },
  { id: 5, name: "Evans Solutions", description: "Managed logistical migration. Expert consulting for digital transformation.", imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=300&fit=crop", contractTypeId: 2, contractSignedOn: "2009-12-18T21:46:47.944Z", budget: 81188, isActive: true },
  { id: 6, name: "Foster Enterprises", description: "Profound mobile project. Creating seamless mobile experiences for users worldwide.", imageUrl: "https://images.unsplash.com/photo-1478860409698-8707f313ee8b?w=500&h=300&fit=crop", contractTypeId: 3, contractSignedOn: "2016-09-23T21:27:25.035Z", budget: 53407, isActive: false },
  { id: 7, name: "Garcia Industries", description: "Vision-oriented composite approach. Integrating multiple technologies into unified solutions.", imageUrl: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=500&h=300&fit=crop", contractTypeId: 1, contractSignedOn: "2015-03-12T14:22:33.000Z", budget: 67800, isActive: true },
  { id: 8, name: "Harris Technologies", description: "Multi-layered client-server framework. Building robust and scalable architectures.", imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=500&h=300&fit=crop", contractTypeId: 5, contractSignedOn: "2014-11-08T09:15:22.000Z", budget: 42300, isActive: true },
  { id: 9, name: "Ingram Systems", description: "Business-focused real-time initiative. Delivering instant insights for better decisions.", imageUrl: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=500&h=300&fit=crop", contractTypeId: 2, contractSignedOn: "2017-01-20T11:45:00.000Z", budget: 95000, isActive: false },
  { id: 10, name: "Johnson Partners", description: "Adaptive zero-defect projection. Quality-first development methodology.", imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&h=300&fit=crop", contractTypeId: 3, contractSignedOn: "2018-05-15T16:30:00.000Z", budget: 58900, isActive: true },
  { id: 11, name: "Klein Associates", description: "Versatile hybrid capability. Bridging traditional and modern development practices.", imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=300&fit=crop", contractTypeId: 4, contractSignedOn: "2019-02-28T08:00:00.000Z", budget: 73500, isActive: true },
  { id: 12, name: "Lopez Consulting", description: "Switchable demand-driven interface. Responsive solutions that adapt to your needs.", imageUrl: "https://images.unsplash.com/photo-1478860409698-8707f313ee8b?w=500&h=300&fit=crop", contractTypeId: 6, contractSignedOn: "2020-07-10T13:20:00.000Z", budget: 41200, isActive: true },
];

const projectAPI = {
  get(page = 1, limit = 20) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const start = (page - 1) * limit;
        const end = start + limit;
        const paginatedProjects = STATIC_PROJECTS.slice(start, end).map(p => new Project(p));
        resolve(paginatedProjects);
      }, 300);
    });
  },

  put(project) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(project);
      }, 300);
    });
  },

  find(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const project = STATIC_PROJECTS.find(p => p.id === parseInt(id));
        if (project) {
          resolve(new Project(project));
        } else {
          reject(new Error('Project not found'));
        }
      }, 300);
    });
  },
};

export { projectAPI };
