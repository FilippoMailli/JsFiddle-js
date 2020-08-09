// this
// casting
// scope
// memory leak

class SocialNetwork {

	constructor(name) {
  	this.name = name;
  }

  publish(message) {
  	console.log('I am publish this message on ' + this.name + ' : ' + message);
  }
}

class User {

	constructor() {
  	this.socialProfiles = {};
  }

  addSocial(name, social) {
  	this.socialProfiles[name] = social;
  }

  publishAll(message) {

    console.log(message);
    console.log(Object.keys(this.socialProfiles))
    //console.log(this.socialProfiles);

    Object.keys(this.socialProfiles).forEach(function (profile) {
     console.log(profile);
     console.log(socialProfiles);
      this.socialProfiles[profile].publish(message);
    });
  }

}

const u = new User();
const Facebook = new SocialNetwork('Facebook');
const Instagram = new SocialNetwork('Instagram');
u.addSocial('Facebook', 'Facebook');
u.addSocial('Instagram', 'Instagram');

console.log(u);
Instagram.publish('hello!');
u.publishAll('today is my birthday'); // not working :(

//Sono riuscito ad arrivare fino a questo punto, di sbagliato nel codice è la funzione publishAll che però non riesco a capire a pieno l'errore,
