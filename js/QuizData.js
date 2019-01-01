
export const QuizData = function() {
}

/**
 * Get the form data for a question or preview. Validates that an answer is supplied
 *
 * @param vue Vue this is getting the form from
 * @returns FormData object or null if validation fails.
 */
QuizData.get = function(vue, mustProvideMessage) {
	const form = vue.$refs['form'];
	const formData = new FormData(form);

	// Validate all controls of class cl-answer-required as having input
	for(const input of form.querySelectorAll('input.cl-answer-required')) {
		// Validate that an answer has been supplied IF a form control
		// named cl-answer exists.
		const answer = formData.get(input.name);
		if(answer === null || answer === '') {
			if(mustProvideMessage !== undefined) {
				vue.$site.toast(vue, mustProvideMessage);
				return null;
			}

			switch(input.type) {
				case 'radio':
					vue.$site.toast(vue, 'You must choose an option');
					break;

				default:
					vue.$site.toast(vue, 'You must provide an answer');
					break;
			}

			return null;
		}
	}

	return formData;
}