function skillsMember() {
    return {
        restrict: 'E',
        templateURL: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        bindToController: true,
        scope: {
            member: '-'
        }
    };

}





