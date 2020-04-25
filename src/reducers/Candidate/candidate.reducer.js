import { saveCandidateInfo } from './candidate.async'

export const SAVE_CANDIDATE_INFO = 'SAVE_CANDIDATE_INFO'

// export const SAVE_CANDIDATE_HALF_BODY_PHOTO = 'SAVE_CANDIDATE_HALF_BODY_PHOTO'
// export const SAVE_CANDIDATE_PASSPORT_PHOTO = 'SAVE_CANDIDATE_PASSPORT_PHOTO'

export const saveCandidateInfoFromApi = (formData, callback) => {
    // debugger
    return dispatch => {
        saveCandidateInfo(formData).then(res => {
            // debugger
            // dispatch
            console.log(res);
            
            
            /**
             * Redirecting towards the New Candidate Details page.
             */
            callback();
            
            
            /**
             * Awaiting function chaining to upload photos and ID card
             */

            // var formData = new FormData();
            // for(var idx = 0; idx < this.state.photoList.length; idx++) {
            //     // console.log(this.state.photoList[idx][1])
            //     formData.append('files', this.state.photoList[idx][1])
            // }

        }).catch(ex => {
            console.log(ex)
        })
    }
}

// export const saveCandidateHalfBodyPhotoThroughAPI = (imageData) => {
//     return dispatch => {
//         saveCandidateHalfBodyPhoto(imageData).then(res => {
//             debugger
//             dispatch
//         }).catch(ex => {
//             console.log(ex)
//         })
//     }
// }

// export const saveCandidatePassportThroughAPI = (imageData) => {
//     return dispatch => {
//         saveCandidatePhotoPassport(imageData).then(res => {
//             debugger
//             dispatch
//         }).catch(ex => {
//             console.log(ex)
//         })
//     }
// }

const initialState = {
    candidateInfo: null,
    message: null
}

export default (state=initialState, action) => {
    switch(action.type) {
        case SAVE_CANDIDATE_INFO:
            return {
                ...state,
                message: action.payload
            }
    }
}
