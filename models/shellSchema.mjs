import mongoose from 'mongoose';

const shellSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    scientific_name: {
        type: String,
        index: {
            unique: true,
            collation: {locale: 'en', strength: 2}
        }
    },
    location_found: {
        type: String,
        index: true
    },
    color: {
        type: String,
        enum: ['white', 'brown', 'striped', 'spotted'],
        required: true
    },
    habitat: {
        type: String,
        validate: { 
            validator: v => ['rocky', 'sandy', 'corral'].includes(v),
            message: props => `${props.value} is not a valid habitat. Valid options are: rocky, sandy, corral.`
        }
      }
    },{ timestamps: true });

    shellSchema.post('save', function(doc) {
      console.log('Shell saved:', doc);
    });
    
    shellSchema.post('validate', function(doc) {
      console.log('Shell validated:', doc);
    });


export default mongoose.model('Shell', shellSchema);